import pandas as pd

def csv_to_json(csv_file, json_file):
    # Read the CSV file
    data = pd.read_csv(csv_file)

    # Convert the data to JSON format
    data_json = data.to_json(orient="records")

    # Write the JSON data to a file
    with open(json_file, "w") as f:
        f.write(data_json)

    print(f"CSV data from '{csv_file}' has been converted to JSON and saved in '{json_file}'")

if __name__ == "__main__":
    csv_file = "s1.csv"
    json_file = "output.json"

    csv_to_json(csv_file, json_file)
