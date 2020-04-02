import React from 'react'
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo';
import PRODUCTS_QUERY from './index';

const ProductContext = React.createContext({});

export const ProductProvider = props => {

    const { data, loading, error } = useQuery(PRODUCTS_QUERY);
        
    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    
    console.log(data);

    const products = data.products; // loading || !data.authUser ? null : 

    return (
        <ProductContext.Provider value={products}>{props.children}</ProductContext.Provider>
    )
}

export const ProductConsumer = ProductContext.Consumer;
export default ProductContext;

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
