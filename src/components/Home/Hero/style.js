const styles = {
  heroSection: {
    background: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
    color: 'white',
    // paddingTop: '96px', // or whatever height your AppBar is
    paddingBottom: '2rem',
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '2rem',
    paddingTop:'64px',
    marginTop:'0',
    '@media (max-width: 600px)': {
      padding: '1.5rem',
      paddingTop:'72px',
      py: 6,
      minHeight: 'auto',
    },
  },

  heroContent: {
    textAlign: 'center',
    marginBottom: '2rem',
    '@media (max-width: 600px)': {
      marginBottom: '1.5rem',
    },
  },

  heroTitle: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    '@media (max-width: 600px)': {
      fontSize: '2.5rem',
    },
  },

  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    opacity: 0.9,
    '@media (max-width: 600px)': {
      fontSize: '1.2rem',
      marginBottom: '1.5rem',
    },
  },

  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '2rem',
  },

  primaryButton: {
    backgroundColor: 'white',
    color: '#1565c0',
    padding: '0.75rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },

  secondaryButton: {
    borderColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    color: 'white',
    padding: '0.75rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '4px',
    '&:hover': {
      borderColor: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },

  profileImage: {
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '6px solid white',
  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
  '@media (max-width: 600px)': {
    width: '200px',
    height: '200px',
  },
},


  statsCard: {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '1rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      borderColor: '#1565c0',
      boxShadow: '0 12px 30px rgba(21, 101, 192, 0.2)',
    },
    '@media (max-width: 600px)': {
    padding: '0.75rem',
    marginBottom: '1rem',
  },
  },

  statsNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },

  statsLabel: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.8)',
    '@media (max-width: 600px)': {
      fontSize: '0.8rem',
    },
  },
};

export default styles;
