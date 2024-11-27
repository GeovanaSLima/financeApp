# Finance Manager App

## Project Description
Finance Manager App is a mobile application designed to help users track and manage their financial transactions effortlessly. With an intuitive interface and essential features, it provides users with a simple and efficient way to stay on top of their personal finances.

## 🚀 Features
- [x] Track Transactions: Log income and expenses in a few taps
- [x] Categorize Spending: Organize transactions by category for better insights
- [x] Transaction History: View a detailed list of past transactions
- [x] Budget Overview: Get a clear picture of your financial health
- [x] Mobile-first Design: A seamless experience on both Android and iOS


## 🔨 Tech Stack

* Frontend: React Native
* Backend: Firebase (Authentication, Firestore Database)
* State Management: Context API 
* Styling: Styled-components

## 💻 Installation and Configuration

1. Clone this repository

```bash
git clone https://github.com/GeovanaSLima/financeApp.git
```

2. Navigate to the project directory

```bash
cd financeApp
```

3. Install Dependencies

```bash
npm install
```

4. Create API file - `src/services/api.js`
   
```javascript
import axios from "axios";

const api = axios.create({
  baseURL: 'http://<your-localhost>'
})

export default api;

```

5. Run the app
   
```bash
npm start
```
