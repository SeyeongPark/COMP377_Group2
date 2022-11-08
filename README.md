# COMP377 SEC.003 - Group 2
Members:
        Cruz-Claro, Carlos
        Dominguez, Marc Adrian
        Etedali, Mohammad
        Park, Seyeong
        Pinlac, Dean Carlo

# Note: Actual Training/Testing Dataset is not saved in these repository.

# Instructions for Building the model
1. Download the dataset: https://www.kaggle.com/apollo2506/facial-recognition-dataset
2. Extract the Training and Testing Dataset
3. Follow the folder structure. It should be something like this.
        - emotion-detection
          - Testing
            - Angry
            - Fear
            - Happy
            - Neutral
            - Sad
            - Suprise
          - Training
            - Angry
            - Fear
            - Happy
            - Neutral
            - Sad
            - Suprise
4. Open a IPYNB file using Jupyter Notebook
5. Run the Code. You might need to install dependencies.
6. Succesful Run will generate 'emotion_model'
7. This will be used by the Backend to generate predictions

# Running the Application
1. Run the Backend (you might need to install dependencies: python -m pip install <missing-package-name>)
        In the server folder, run command: python server.py
2. Run the Frontend
        In the react-ui folder, run command: npm install
        Then, run command: npm start
3. Open the Application in a browser
        Go to http://localhost:3000
4. Click Choose File to open dialog box
5. Select an IMAGE (.jpg) from your files
6. Click Upload and Get Result
7. An emotion prediction will be displayed.

# Preview
<img width="1440" alt="Screen Shot 2022-11-08 at 12 43 18 PM" src="https://user-images.githubusercontent.com/67844037/200637468-b6d21ba2-ba9f-4719-be30-bdc33c13c2cd.png">
