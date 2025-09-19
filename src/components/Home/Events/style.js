const styles = {
  section: {
    py: 8,
    backgroundColor: 'white'
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    mb: 2,
    color: '#1565c0'
  },
  sectionSubtitle: {
    fontSize: '1.2rem',
    textAlign: 'center',
    color: '#666',
    mb: 6
  },
  eventCard: {
    height: '100%',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
    '&:hover': {
      transform: 'translateY(-4px)',
      borderColor: '#1565c0',
      boxShadow: '0 12px 30px rgba(21, 101, 192, 0.2)'
    }
  },
  featuredCard: {
    background: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden'
  },
  featuredImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundImage: `url(${campaignRally})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3
  },
  featuredContent: {
    position: 'relative',
    zIndex: 2
  },
  eventDate: {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
    color: '#1565c0'
  },
  eventTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    mb: 2,
    color: '#1565c0'
  },
  events:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  featuredTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    mb: 2,
    color: 'white'
  },
  eventDetails: {
    display: 'flex',
    alignItems: 'center',
    mb: 1,
    fontSize: '0.95rem',
    color: '#666'
  },
  featuredDetails: {
    display: 'flex',
    alignItems: 'center',
    mb: 1,
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)'
  },
  eventIcon: {
    mr: 1,
    fontSize: '1.2rem'
  },
  eventDescription: {
    fontSize: '1rem',
    lineHeight: 1.6,
    mb: 3,
    color: '#666'
  },
  featuredDescription: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    mb: 3,
    color: 'rgba(255, 255, 255, 0.9)'
  },
  attendButton: {
    mt: 2,
    backgroundColor: '#1565c0',
    color: 'white',
    '&:hover': {
      backgroundColor: '#0d47a1'
    }
  },
  featuredButton: {
    mt: 2,
    backgroundColor: 'white',
    color: '#1565c0',
    '&:hover': {
      backgroundColor: '#f5f5f5'
    }
  },
  typeChip: {
    mb: 2,
    fontWeight: 'bold'
  },
  pastEventCard: {
    opacity: 0.8,
    backgroundColor: '#f8f9fa'
  },
  pastEventTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    mb: 2,
    color: '#666'
  },
  attendeeCount: {
    display: 'flex',
    alignItems: 'center',
    mt: 2,
    color: '#4caf50',
    fontWeight: 'bold'
  },
  recent:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  recentX:{
    '&:hover':{
        transform: 'translateY(-4px)',
    }
  },
};

export default styles;