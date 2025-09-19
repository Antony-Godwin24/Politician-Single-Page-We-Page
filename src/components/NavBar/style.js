const styles = {
  appBar: {
    backgroundColor: '#1565c0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'fixed',
    zIndex: 1000,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    height:'98px'
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap', // wraps in mobile view
    padding: '0.5rem 1rem',
  },

  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem', 
    color: 'white',
    '@media (max-width: 600px)': {
      fontSize: '1.2rem',
    },
  },

  navButtons: {
    display: 'flex',
    gap: '1rem',

    '@media (max-width: 600px)': {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'flex-start',
      marginTop: '0.5rem',
    },
  },

  navButton: {
    color: 'white',
    textTransform: 'none',
    fontSize: '1rem',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },

    '@media (max-width: 600px)': {
      width: '100%',
      justifyContent: 'flex-start',
      paddingLeft: '0.5rem',
    },
  },
};

export default styles;
