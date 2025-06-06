# Automatic Number Plate Recognition (ANPR)

This project implements an Automatic Number Plate Recognition (ANPR) system capable of detecting and recognizing vehicle license plates from text, images, and video streams.
Welcome to our Number Plate Recognition platform — a powerful solution that utilizes advanced Optical Character Recognition (OCR) technology to accurately detect and track vehicle license plates in real-time. Designed to streamline urban traffic management, enhance public safety, and optimize operations in toll collection, parking, and law enforcement, our platform ensures high-performance accuracy and regulatory compliance. Built with React and styled using Tailwind CSS, it delivers a fast, responsive, and intuitive user experience across all devices. For secure and scalable authentication, we integrate Firebase for email authentication and Auth0 to manage user access for google accounts and ensure data security. Whether it's for city planning, traffic enforcement, or private infrastructure, our platform offers a seamless and intelligent approach to modern vehicle monitoring.

## Features

- **License Plate Detection**: Utilizes a trained object detection model to locate license plates in images or video frames.
- **Text Recognition**: Applies OCR to extract alphanumeric characters from the detected license plates.
- **Web Interface**: Provides a user-friendly frontend for uploading images and viewing results.
- **API Integration**: Backend API handles image processing and returns recognized text.
- **Dockerized Deployment**: Includes Docker configuration for easy setup and deployment.

## Project Structure

```

Automatic-Number-Plate-Recognition/
├── backend/               # Flask API & python backend
├── frontend/              # React.js frontend for user interaction
├── model/                 # Pre-trained models and training scripts
├── data/                  # Sample images and datasets
├── Dockerfile             # Docker configuration file
├── requirements.txt       # Python dependencies
├── vercel.json            # Vercel deployment configuration
└── README.md              # Project documentation
```


## Installation

### Prerequisites

- Python 3.7 or higher
- Node.js and npm
- Docker (optional, for containerized deployment)


### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the required npm packages:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm run dev
   ```


### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask server:
   ```bash
   python app.py
   ```


### Docker Deployment

To run the application using Docker:

1. Build the Docker image:
   ```bash
   docker build -t anpr-app .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 5000:5000 anpr-app
   ```

   
## Usage

1. Access the frontend interface by navigating to `http://localhost:5173` in your web browser.
2. Upload an image containing a vehicle license plate.
3. The application will display the detected license plate along with the recognized text.

## Dataset

The model is trained on the [Vehicle Number Plate Detection Dataset](https://www.kaggle.com/dataturks/vehicle-number-plate-detection) from Kaggle, which contains images of Indian vehicles along with annotated license plates.

## Model Training

The object detection model is based on the SSD MobileNet V1 architecture and is trained using TensorFlow's Object Detection API.

### Steps:

1. Prepare the dataset and convert annotations to TFRecord format.
2. Configure the training pipeline using the provided `ssd_mobilenet_v1_pets.config` file.
3. Train the model:
   ```bash
   python model_main.py --pipeline_config_path=ssd_mobilenet_v1_pets.config --model_dir=training/ --alsologtostderr
   ```


## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Python3, Flask
- **Object Detection**: TensorFlow Object Detection API
- **OCR**: Tesseract OCR
- **Containerization**: Docker


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Vehicle Number Plate Detection Dataset](https://www.kaggle.com/dataturks/vehicle-number-plate-detection)
- [TensorFlow Object Detection API](https://github.com/tensorflow/models/tree/master/research/object_detection)
- [Tesseract OCR](https://github.com/tesseract-ocr/tesseract)

---
