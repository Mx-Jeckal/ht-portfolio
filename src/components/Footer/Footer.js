
import React from 'react';
import './style.css'


function Footer(){
    return(
        <div className="container">
        <ul className="list-inline mb-5">
          <li className="list-inline-item">
            <a className="social-link rounded-circle text-white mr-3" href="//www.linkedin.com/in/hazel-tuxhorn-b450a9195/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="social-link rounded-circle text-white mr-3" href="//twitter.com/tuxhornhazel">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="social-link rounded-circle text-white" src   href="//github.com/Mx-Jeckal">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <p className="text-muted small mb-0">Copyright &copy; Hazel Tuxhorn MMXX</p>
        </div>
    )
}


export default Footer;