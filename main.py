
from pathlib import Path

import joblib
import pandas as pd
from fastapi import FastAPI
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field
from typing import Literal

# Project directory
BASE_DIR = Path(__file__).resolve().parent

app = FastAPI(
    title="Loan Approval Prediction API",
    description="Machine Learning based Loan Approval Prediction",
    version="1.0.0"
)

# Load trained Random Forest pipeline
model = joblib.load(BASE_DIR / "loan_approval_model.pkl")


# Applicant input schema
class LoanApplication(BaseModel):
    no_of_dependents: int = Field(ge=0)
    education: Literal["Graduate", "Not Graduate"]
    self_employed: Literal["Yes", "No"]
    income_annum: float = Field(ge=0)
    loan_amount: float = Field(gt=0)
    loan_term: int = Field(gt=0)
    cibil_score: int = Field(ge=300, le=900)
    residential_assets_value: float = Field(ge=0)
    commercial_assets_value: float = Field(ge=0)
    luxury_assets_value: float = Field(ge=0)
    bank_asset_value: float = Field(ge=0)


# Website home page
@app.get("/")
def home():
    return FileResponse(BASE_DIR / "index.html")


# Serve CSS file
@app.get("/style.css")
def get_css():
    return FileResponse(
        BASE_DIR / "style.css",
        media_type="text/css"
    )


# Serve JavaScript file
@app.get("/script.js")
def get_javascript():
    return FileResponse(
        BASE_DIR / "script.js",
        media_type="application/javascript"
    )


# API health check
@app.get("/health")
def health():
    return {
        "status": "running",
        "model_status": "loaded"
    }


# Loan prediction endpoint
@app.post("/predict")
def predict_loan(application: LoanApplication):

    # Convert input to DataFrame
    input_data = pd.DataFrame(
        [application.model_dump()]
    )

    # Make prediction
    prediction = model.predict(input_data)[0]

    return {
        "prediction": str(prediction)
    }
