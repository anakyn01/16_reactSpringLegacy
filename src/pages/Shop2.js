import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Shop2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 상품 API 불러오기
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('상품 불러오기 실패:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">🛒 쇼핑몰 상품 목록</h1>

      {loading ? (
        <p>상품을 불러오는 중입니다...</p>
      ) : (
        <div className="row">
          {products.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: '300px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-truncate">{product.description}</p>
                  <p className="card-text fw-bold">${product.price}</p>
                  <button className="btn btn-primary">장바구니</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop2;