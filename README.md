
# LoanWise AI — Loan Approval Prediction System

## Project Overview

LoanWise AI is an end-to-end machine learning project designed to predict whether a loan application is likely to be approved or rejected based on applicant information.

The project includes data preprocessing, exploratory data analysis, model training, hyperparameter tuning, evaluation, REST API development, and cloud deployment.

This project was developed as part of the Computational Intelligence course.

## Live Website

https://loan-approval-prediction-bhhc.onrender.com

## GitHub Repository

https://github.com/Rutujad2006/Loan_Approval_Prediction

## Technologies Used

- Python
- Pandas and NumPy
- Scikit-learn
- Random Forest Classifier
- FastAPI
- Uvicorn
- HTML, CSS, JavaScript
- Git and GitHub
- Render Cloud Hosting

## Machine Learning Models

Three classification algorithms were trained and evaluated:

| Algorithm | Test Accuracy |
|-----------|---------------|
| Logistic Regression | 92.27% |
| Decision Tree | 97.19% |
| Random Forest | 98.13% |
| Tuned Random Forest | 98.24% |

The tuned Random Forest classifier was selected as the final prediction model.

## Dataset

- Total records: 4,269
- Training records: 3,415
- Testing records: 854
- Input features: 11
- Target variable: Loan Status

## Data Preprocessing

The preprocessing pipeline includes:

- Handling missing values using median imputation where required
- Encoding categorical variables
- Standardizing numerical features
- Splitting the dataset into training and testing sets

## Model Evaluation

The final tuned Random Forest model achieved:

- Test Accuracy: 98.24%
- Cross-validation Accuracy: 98.21%
- Correct Predictions: 839 out of 854 test samples

Confusion Matrix:

| Actual / Predicted | Approved | Rejected |
|--------------------|----------|----------|
| Approved | 528 | 3 |
| Rejected | 12 | 311 |

## Application Features

- Interactive loan application form
- Eleven applicant input fields
- Real-time loan approval predictions
- Approved and Rejected result display
- Responsive banking dashboard
- FastAPI REST API integration
- Cloud-hosted web application

## REST API

The application uses FastAPI.

### Endpoints

- `GET /` — Displays the web application
- `POST /predict` — Accepts applicant details and returns a prediction
- `GET /docs` — Interactive Swagger API documentation

Example prediction response:

```json
{
  "prediction": "Approved"
}
```

## Run Locally

1. Clone the repository:

   `git clone https://github.com/Rutujad2006/Loan_Approval_Prediction.git`

2. Open the project directory:

   `cd Loan_Approval_Prediction`

3. Create a virtual environment:

   `python -m venv .venv`

4. Activate it on Windows:

   `.venv\Scripts\activate`

5. Install dependencies:

   `pip install -r requirements.txt`

6. Start the application:

   `python -m uvicorn main:app --reload`

7. Open the application:

   `http://127.0.0.1:8000`

## Deployment

The application is deployed on Render using a Python web service connected to GitHub.

Build command:

`pip install -r requirements.txt`

Start command:

`uvicorn main:app --host 0.0.0.0 --port $PORT`

Updates pushed to the GitHub repository can trigger automatic redeployment.

## Academic Disclaimer

This project is intended for educational and demonstration purposes only. Predictions are based on a machine learning model trained on a historical dataset and should not be used as actual lending decisions.
