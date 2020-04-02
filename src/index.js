import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context/context';

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
    uri: "https://api-eu-central-1.graphcms.com/v2/ck8igwodn02co01xm7ocwbu9l/master"
  });


ReactDOM.render(
    <ApolloProvider client={client}>
        <ProductProvider>
            <Router>
                <App />
            </Router>
        </ProductProvider>
    </ApolloProvider>,
    document.getElementById('root')
);

registerServiceWorker();
