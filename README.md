
# Secure KYC Sharing Using Blockchain

## 🚀 Project Overview
This project leverages blockchain technology to securely manage and share Know Your Customer (KYC) data. Traditional centralized systems pose risks of data misuse and unauthorized access. By using blockchain, we ensure data immutability, encryption, and fine-grained access control. Users receive email notifications whenever their KYC data is accessed, enhancing transparency and security.

## ✨ Key Features
- **Secure KYC Storage**: KYC data is stored on the blockchain, ensuring immutability and encryption.
- **Access Control**: Only authorized users (e.g., Bank Admins) can access KYC records.
- **Email Notifications**: Users are notified via email when their KYC data is accessed.
- **Smart Contracts**: Solidity-based smart contracts manage user sign-up, KYC uploads, and access permissions.
- **User and Admin Modules**: Separate interfaces for users to upload KYC and for admins to verify/access KYC records.

## 🛠 Technologies Used
- **Blockchain**: Ethereum
- **Smart Contracts**: Solidity
- **Backend**: Python + Web3.py
- **Frontend**: Django
- **Email Notifications**: SMTP integration
- **Optional Enhancements**: AI/ML using TensorFlow, Keras, OpenCV, NLP

## 📦 Prerequisites

Before running the project, make sure the following Python dependencies are installed:

```bash
pip install numpy==1.18.1
pip install matplotlib==3.1.3 
pip install pandas==0.25.3 
pip install opencv-python==4.2.0.32
pip install keras==2.3.1 
pip install tensorflow==1.14.0 
pip install h5py==2.10.0 
pip install protobuf==3.16.0
pip install pillow==7.0.0
pip install sklearn-genetic==0.2
pip install SwarmPackagePy
pip install sklearn
pip install scikit-learn==0.22.2.post1
pip install sklearn-extensions==0.0.2
pip install pyswarms==1.1.0
pip install nltk
pip install django==2.1.7
pip install web3
```

> Note: These libraries support optional modules like facial recognition, AI-driven validation, or KYC record optimization.

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/Reddybangaram123/Secure-KYC-Sharing-Using-Blockchain.git
cd Secure-KYC-Sharing-Using-Blockchain
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Configure your Ethereum development environment:
   - Install **Ganache** or connect to **Infura**.
   - Compile and deploy the smart contract using `truffle` or `brownie`.

4. Update `settings.py` and `.env`:
   - Add Web3 provider URL
   - Email SMTP credentials
   - Contract address and ABI path

## 🚀 Running the Project

```bash
python manage.py migrate
python manage.py runserver
```

- Visit: `http://127.0.0.1:8000/`
- Users can register and upload KYC documents.
- Admins can log in, request access, and view authorized KYC details.

## ✉️ Email Notifications
When KYC is accessed:
- An email is sent to the KYC document owner.
- Email content includes the viewer identity, timestamp, and purpose of access.

## 🔐 Security Highlights
- KYC documents are encrypted.
- Blockchain ensures immutable access records.
- Only whitelisted admin addresses can request access.

## 📁 Project Structure
```
Secure-KYC-Sharing-Using-Blockchain/
├── contracts/
│   └── KYCManager.sol         # Smart contract
├── kycapp/
│   ├── views.py               # Django views
│   ├── models.py              # Database models
│   └── templates/             # HTML templates
├── manage.py
├── requirements.txt
└── README.md
```

## 🧪 Testing
Use Ganache for local testing of smart contracts. You can also deploy contracts to Ropsten/Testnet and interact via Web3.py integration.

## 🧠 Future Enhancements
- Biometric KYC verification
- AI-based document validation
- Decentralized file storage (IPFS)
- Multi-factor authentication



## 👨‍💻 Author

**Kummitha Gopal Reddy**  
💼 Web Developer | 🛡️ Blockchain Enthusiast  
📧 [kummithagopalreddy854@gmail.com](mailto:kummithagopalreddy854@gmail.com)

## 📜 License
This project is licensed under the MIT License.
