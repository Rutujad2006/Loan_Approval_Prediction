
import joblib
import sklearn

print("Python file is running!")
print("Installed Scikit-learn version:", sklearn.__version__)

try:
    model = joblib.load("loan_approval_model.pkl")

    print("Model loaded successfully!")
    print("Model type:", type(model))

except Exception as e:
    print("Error loading model:", e)
