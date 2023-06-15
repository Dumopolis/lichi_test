import Image from 'next/image'
import React from 'react'

import footerCopy from '../public/img/footer-copy.png'

import './footer.module.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <Image src={footerCopy} alt='footer-copy' className='footer__copy-image'/>
      <span className='footer__copy-text'>— All rights reserved</span>
    </footer>
  )
}
