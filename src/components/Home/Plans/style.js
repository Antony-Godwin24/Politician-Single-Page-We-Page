const styles = {
  section: {
    py: 8,
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
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
  planCard: {
    height: '100%',
    width:'100%',
    minHeight:'350px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
    '&:hover': {
      transform: 'translateY(-8px)',
      borderColor: '#1565c0',
      boxShadow: '0 12px 30px rgba(21, 101, 192, 0.2)'
    }
  },
  planIcon: {
    fontSize: '3.5rem',
    color: '#1565c0',
    mb: 2
  },
  planTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    mb: 2,
    color: '#1565c0'
  },
  planDescription: {
    fontSize: '1rem',
    color: '#666',
    mb: 3,
    lineHeight: 1.6
  },
  plans:{
    margin:'0px auto',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  goalsList: {
    mt: 2
  },
  goalItem: {
    py: 0.5,
    px: 0
  },
  goalIcon: {
    color: '#4caf50',
    minWidth: '32px'
  },
  goalText: {
    fontSize: '0.95rem'
  },
  priorityChip: {
    mt: 2,
    fontWeight: 'bold'
  },
  progressSection: {
    mt: 4,
    p: 3,
    backgroundColor: 'rgba(21, 101, 192, 0.05)',
    borderRadius: 2
  },
  progressTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#1565c0',
    mb: 2
  },
  progressItem: {
    mb: 2
  },
  progressLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    mb: 1
  },
  progressBar: {
    height: 8,
    borderRadius: 4
  }
};export default styles;