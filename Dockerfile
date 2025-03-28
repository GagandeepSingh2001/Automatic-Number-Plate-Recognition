# Step 1: Use an official Python image
FROM python:3.9-slim AS python-base

# Step 2: Set the working directory for the Python environment
WORKDIR /app

# Step 3: Install dependencies for Python environment
# Install virtualenv
RUN pip install virtualenv

# Step 4: Create a virtual environment named 'anpr' (using the 'virtualenv' command)
RUN virtualenv -p python3 anpr

# Step 5: Install Python dependencies into the virtual environment
COPY backend/requirements.txt ./backend/requirements.txt
RUN /app/anpr/bin/pip install --upgrade pip
RUN /app/anpr/bin/pip install -r /app/backend/requirements.txt

# Step 6: Install dependencies for building the frontend
RUN apt-get update && apt-get install -y build-essential curl

# Step 7: Use the official Node.js image for building the frontend
FROM node:16 AS node-base

# Set working directory for frontend build
WORKDIR /frontend

# Step 8: Copy frontend files into the container and install dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Step 9: Build the frontend using Vite
COPY frontend ./
RUN npm run build

# Step 10: Back to Python base container to serve everything
FROM python-base

# Step 11: Set the working directory
WORKDIR /app

# Step 12: Copy Python backend and built frontend files into the container
COPY backend/app.py ./backend/app.py
COPY --from=node-base /frontend/dist /app/frontend/dist

# Step 13: Expose port 8000 (backend port)
EXPOSE 8000

# Step 14: Command to run the app with the virtual environment
CMD ["./anpr/bin/python", "backend/app.py"]