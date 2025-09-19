import { BorderBottom } from "@mui/icons-material";

const styles = {
  section: {
    py: 8,
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    mb: 2,
    color: "#1565c0",
  },
  sectionSubtitle: {
    fontSize: "1.2rem",
    textAlign: "center",
    color: "#666",
    mb: 6,
  },
  partyCard: {
    background: "linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)",
    color: "white",
    boxShadow: "0 8px 24px rgba(21, 101, 192, 0.3)",
    mb: 4,
  },
  partyLogo: {
    fontSize: "4rem",
    mb: 2,
  },
  partyName: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    mb: 2,
  },
  partyMotto: {
    fontSize: "1.3rem",
    fontStyle: "italic",
    opacity: 0.9,
  },
  statsGrid: {
    mt: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  statCard: {
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease",
      boxShadow: "0 8px 24px rgba(21, 101, 192, 0.3)",
      borderBottom: "4px solid #ffd700",
    },
  },
  statNumber: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#ffd700",
  },
  statLabel: {
    fontSize: "1rem",
    color: "white",
  },
  historyCard: {
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  historyCardX: {
    height: "100%",
    "&:hover": {
      transform: "translateY(-4px)",
    },
    margin: "0px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s ease",
  },
  historyItem: {
    display: "flex",
    alignItems: "flex-start",
    mb: 3,
    p: 2,
    backgroundColor: "rgba(21, 101, 192, 0.05)",
    borderRadius: 2,
    borderLeft: "4px solid #1565c0",
  },
  historyYear: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#1565c0",
    minWidth: "80px",
    mr: 3,
  },
  historyContent: {
    flex: 1,
  },
  historyTitle: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#1565c0",
    mb: 1,
  },
  historyDescription: {
    fontSize: "0.95rem",
    color: "#666",
  },
  hist: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px auto",
  },
  leaderCard: {
    textAlign: "center",
    height: "100%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px)",
    },
  },
  leaderAvatar: {
    width: 80,
    height: 80,
    mx: "auto",
    mb: 2,
    backgroundColor: "#1565c0",
  },
  leaderName: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    mb: 1,
    color: "#1565c0",
  },
  leaderPosition: {
    fontSize: "1rem",
    color: "#666",
    mb: 2,
  },
  core:{
    '&:hover':{
        backgroundColor: 'blue',
        transition: 'all 0.3s ease',
        color:'white',
        fontWeight:'bold',
    }
  },
};
export default styles;
