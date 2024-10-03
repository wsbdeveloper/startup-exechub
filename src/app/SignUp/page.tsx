"use client";

import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Grid,
  Checkbox,
  Link,
  Divider,
} from "@mui/material";
import { Facebook, LinkedIn, Google } from "@mui/icons-material";

export default function SignUpPage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={0} sx={{ height: "90vh", boxShadow: 3 }}>
        {/* Left Section - Sign Up */}
        <Grid item xs={12} md={6} sx={{ p: 4, backgroundColor: "#fff" }}>
          <img
            src="/ExecHubLogo.png"
            alt="ExecHub Logo"
            style={{ maxWidth: "30%", height: "auto" }}
          />

          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Crie sua conta
          </Typography>

          <Divider
            sx={{
              width: "60px",
              my: 2,
              borderBottomWidth: 2,
              backgroundColor: "#EF7A1A",
            }}
          />

          {/* Social Sign Up */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Facebook sx={{ fontSize: 40, color: "#3b5998" }} />
            <LinkedIn sx={{ fontSize: 40, color: "#0077b5" }} />
            <Google sx={{ fontSize: 40, color: "#DB4437" }} />
          </Box>

          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            ou cadastre-se usando um email
          </Typography>

          {/* Sign Up Form */}
          <Box component="form" noValidate sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Nome completo"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: "#F5F5F5" }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: "#F5F5F5" }}
            />
            <TextField
              fullWidth
              label="Senha"
              type="password"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: "#F5F5F5" }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
              <Checkbox color="primary" />
              <Typography variant="body2" component="span">
                Eu concordo com os termos de uso e políticas de privacidade
              </Typography>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 3, py: 1.5, borderRadius: 20, backgroundColor: "#EF7A1A" }}
            >
              Cadastrar
            </Button>
          </Box>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Já possui uma conta?{" "}
            <Link href="/login" underline="none" sx={{ color: "#EF7A1A" }}>
              Acesse
            </Link>
          </Typography>
        </Grid>

        {/* Right Section - Info */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: 4,
            backgroundColor: "#EF7A1A",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Bem vindo à ExecHub
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Faça o seu cadastro e junte-se ao movimento open talent
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              py: 1.5,
              px: 5,
              borderRadius: 20,
              "&:hover": {
                backgroundColor: "#fff",
                color: "#EF7A1A",
              },
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
