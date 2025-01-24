# Use the official Python 3.10 image
FROM python:3.10

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all the application files into the container
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Run Django (or another framework) using manage.py
CMD ["python", "manage.py", "runserver", "0.0.0.0:5000"]
