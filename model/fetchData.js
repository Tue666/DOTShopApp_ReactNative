import { BASE_URL } from '../core/config';

export const Login = (userName, passWord) => {
    return fetch(BASE_URL + 'Login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            UserName: userName,
            PassWord: passWord
        })
    });
}

export const Register = (userName, passWord, confirmPass) => {
    return fetch(BASE_URL + 'Register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            UserName: userName,
            PassWord: passWord,
            ConfirmPass: confirmPass
        })
    });
}

export const changePassword = (token, oldPass, newPass, confirmNewPass) => {
    return fetch(BASE_URL + 'ChangePassword', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            OldPass: oldPass,
            NewPass: newPass,
            ConfirmNewPass: confirmNewPass
        })
    });
}

export const checkExistUserName = (userName) => {
    return fetch(BASE_URL + 'CheckExistUserName/' + userName);
}

export const getUser = (token) => {
    return fetch(BASE_URL + 'User', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const editUser = (token, name, phone, email, address) => {
    return fetch(BASE_URL + 'EditUser', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            Name: name,
            Phone: phone,
            Email: email,
            Address: address
        })
    });
}

export const loadFavorite = (token) => {
    return fetch(BASE_URL + 'Favorite', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const insertToFavorite = (token, productID) => {
    return fetch(BASE_URL + 'InsertToFavorite', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            ProductID: productID
        })
    });
}

export const removeFavorite = (token, productID) => {
    return fetch(BASE_URL + 'RemoveFavorite', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            ProductID: productID
        })
    });
}

export const clearFavorite = (token) => {
    return fetch(BASE_URL + 'ClearFavorite', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const loadPurchased = (token) => {
    return fetch(BASE_URL + 'Purchased', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const loadCart = (token) => {
    return fetch(BASE_URL + 'ListCart', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const addCart = (token, productID, quantity) => {
    return fetch(BASE_URL + 'AddCart', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            ProductID: productID,
            Quantity: quantity
        })
    });
}

export const editQuantityCart = (token, productID, newQuantity) => {
    return fetch(BASE_URL + 'EditQuantityCart', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            ProductID: productID,
            NewQuantity: newQuantity
        })
    });
}

export const removeItem = (token, productID) => {
    return fetch(BASE_URL + 'RemoveItem', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            ProductID: productID
        })
    });
}

export const clearCart = (token) => {
    return fetch(BASE_URL + 'ClearCart', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const countCartItem = (token) => {
    return fetch(BASE_URL + 'CountCartItem', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const checkOut = (token, name, email, phone, address) => {
    return fetch(BASE_URL + 'CheckOut', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            Name: name,
            Email: email,
            Phone: phone,
            Address: address
        })
    });
}

export const Searching = (key, isAdvanced, category, priceFrom, priceTo) => {
    return fetch(BASE_URL + 'Searching', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Key: key,
            IsAdvanced: isAdvanced,
            Category: category,
            PriceFrom: priceFrom,
            PriceTo: priceTo
        })
    });
}

export const FetchTopProducts = (type, number) => {
    return fetch(BASE_URL + type + '/' + number);
}

export const FetchRelatedProducts = (productID) => {
    return fetch(BASE_URL + 'Related/' + productID);
}

export const FetchListCate = () => {
    return fetch(BASE_URL + 'ListCate');
}

export const FetchProductsByCate = (cateID) => {
    return fetch(BASE_URL + 'ProductsByCate/' + cateID);
}

export const loadHistory = (token) => {
    return fetch(BASE_URL + 'ListHistory', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const getListOrderDetail = (orderID) => {
    return fetch(BASE_URL + 'ListOrderDetail', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            OrderID: orderID
        })
    });
}

export const submitFeedback = (token, name, email, phone, title, content) => {
    return fetch(BASE_URL + 'SubmitFeedback', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token,
            Name: name,
            Email: email,
            Phone: phone,
            Title: title,
            Content: content
        })
    });
}

export const loadFeedback = (token) => {
    return fetch(BASE_URL + 'ListFeedback', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
    });
}

export const getFeedbackByID = (feedbackID) => {
    return fetch(BASE_URL + 'Feedback/' + feedbackID);
}

export const sendFeedback = (feedbackID, content) => {
    return fetch(BASE_URL + 'SendFeedback', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            FeedbackID: feedbackID,
            Content: content
        })
    });
}