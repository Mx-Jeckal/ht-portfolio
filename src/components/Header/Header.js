import React from 'react';
import './style.css'


function Header(){
    return(
<div class="header">
  <div class="sides">
    <a href="#" class="logo">BLOG</a>
  </div>
  <div class="sides"> <a href="#" class="menu"> </a></div>
    <div class="info">
        <h4><a href="#category">UI DESIGN</a></h4>
        <h1>KEN BURNS HEADERS ARE THE BEST</h1>
        <div class="meta">
        <a  href="https://twitter.com/nodws" target="_b" class="author"></a><br />
        By <a href="https://twitter.com/nodws" target="_b">James Nodws</a> on May 30, 2019
    </div>
  </div>
</div>

    )
}


export default Header;