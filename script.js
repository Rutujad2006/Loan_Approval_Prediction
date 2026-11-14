
const form = document.getElementById("loanForm");
const result = document.getElementById("result");
const predictButton = document.getElementById("predictButton");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const data = {
        no_of_dependents: Number(
            document.getElementById("no_of_dependents").value
        ),
        education:
            document.getElementById("education").value,
        self_employed:
            document.getElementById("self_employed").value,
        income_annum: Number(
            document.getElementById("income_annum").value
        ),
        loan_amount: Number(
            document.getElementById("loan_amount").value
        ),
        loan_term: Number(
            document.getElementById("loan_term").value
        ),
        cibil_score: Number(
            document.getElementById("cibil_score").value
        ),
        residential_assets_value: Number(
            document.getElementById("residential_assets_value").value
        ),
        commercial_assets_value: Number(
            document.getElementById("commercial_assets_value").value
        ),
        luxury_assets_value: Number(
            document.getElementById("luxury_assets_value").value
        ),
        bank_asset_value: Number(
            document.getElementById("bank_asset_value").value
        )
    };

    result.className = "result-box loading";
    result.textContent = "Analyzing your application...";

    predictButton.disabled = true;
    predictButton.textContent = "Analyzing...";

    try {
        const response = await fetch("/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(
                "Prediction request failed: " + response.status
            );
        }

        const output = await response.json();
        const prediction = String(output.prediction).trim();

        if (prediction === "Approved") {
            result.className = "result-box approved";
            result.textContent =
                "✓ Loan Prediction: APPROVED";
        } else if (prediction === "Rejected") {
            result.className = "result-box rejected";
            result.textContent =
                "✕ Loan Prediction: REJECTED";
        } else {
            throw new Error("Unexpected prediction result");
        }

        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    } catch (error) {
        console.error(error);

        result.className = "result-box error";
        result.textContent =
            "Unable to get prediction. Please try again.";

    } finally {
        predictButton.disabled = false;
        predictButton.textContent =
            "✦ Analyze Loan Application →";
    }
});

// Clear previous result when form is reset
form.addEventListener("reset", function() {
    result.className = "result-box";
    result.textContent = "";
});
