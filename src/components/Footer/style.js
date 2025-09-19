const styles = {
  footer: {
    backgroundColor: '#1565c0',
    color: 'white',
    pt: 6,
    pb: 3
  },
  footerTop: {
    mb: 4
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    mb: 3
  },
  logoIcon: {
    fontSize: '2rem',
    mr: 2
  },
  logoText: {
    fontSize: '1.8rem',
    fontWeight: 'bold'
  },
  footerDescription: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    opacity: 0.9,
    mb: 3
  },
  socialIcons: {
    display: 'flex',
    gap: 1,
    mb: 3
  },
  socialIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      transform: 'translateY(-2px)'
    },
    transition: 'all 0.3s ease'
  },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    mb: 2,
    color: '#ffd700'
  },
  linkList: {
    p: 0
  },
  linkItem: {
    p: 0,
    mb: 1
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    opacity: 0.9,
    transition: 'opacity 0.3s ease',
    '&:hover': {
      opacity: 1,
      textDecoration: 'underline'
    }
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
    fontSize: '1rem'
  },
  contactIcon: {
    mr: 2,
    fontSize: '1.2rem'
  },
  footerBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    pt: 3,
    mt: 4,
    textAlign: 'center'
  },
  copyright: {
    fontSize: '0.9rem',
    opacity: 0.8
  },
  disclaimer: {
    fontSize: '0.85rem',
    opacity: 0.7,
    mt: 1,
    fontStyle: 'italic'
  }
};export default styles;