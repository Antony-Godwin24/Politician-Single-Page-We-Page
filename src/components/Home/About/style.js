const styles = {
  section: {
    px: { xs: 1, sm: 3, md: 8 },
    py: { xs: 4, sm: 8, md: 10 },
    bgcolor: "#f8f9fa",
  },

  sectionTitle: {
    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
    fontWeight: "bold",
    textAlign: "center",
    mb: { xs: 3, sm: 4 },
    color: "#1565c0",
    letterSpacing: 1
  },

  sectionSubtitle: {
    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
    textAlign: "center",
    color: "#666",
    mb: { xs: 3, sm: 4, md: 5 },
  },

  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
    transition: "transform 0.3s",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      transform: "translateY(-6px) scale(1.04)",
      boxShadow: "0 8px 20px rgba(21,101,192,0.20)"
    },
    my: 1
  },

  cards: {
    display: "flex",
    flexDirection: { xs: "column", md: "column" },
    alignItems: "center",
    gap: { xs: 3, md: 4 },
    width: "100%",
    py: { xs: 1, md: 0 }
  },

  cardIcon: {
    fontSize: { xs: "2rem", sm: "2.2rem", md: "3rem" },
    color: "#1565c0",
    mb: 1
  },

  cardTitle: {
    fontSize: { xs: "1.1rem", sm: "1.19rem", md: "1.5rem" },
    fontWeight: "bold",
    mb: 1,
    color: "#1565c0",
    letterSpacing: 0.5
  },

  bioText: {
    fontSize: { xs: "0.96rem", sm: "1.03rem", md: "1.1rem" },
    lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
    color: "#444",
    mb: { xs: 2, sm: 2.5, md: 3 }
  },

  achievementsList: {
    mt: 2,
    pl: { xs: 0.5, sm: 2 }
  },

  achievementItem: {
    py: 0.5,
    px: { xs: 0, sm: 0.5 }
  },

  achievementIcon: {
    color: "#4caf50",
    fontSize: { xs: "1.3rem", sm: "1.6rem" }
  },
};

export default styles;
