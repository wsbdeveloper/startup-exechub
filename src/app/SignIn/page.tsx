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

export default function SignInPage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={0} sx={{ height: "90vh", boxShadow: 3 }}>
        {/* Left Section - Login */}
        <Grid item xs={12} md={6} sx={{ p: 4, backgroundColor: "#fff" }}>
          <img src="/ExecHubLogo.png" alt="ExecHub Logo" style={{ maxWidth: "30%", height: "auto" }}/>

          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Acesse sua conta
          </Typography>

          <Divider sx={{ width: "60px", my: 2, borderBottomWidth: 2, backgroundColor: "#EF7A1A" }} />

          {/* Social Login */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Facebook sx={{ fontSize: 40, color: "#3b5998" }} />
            <LinkedIn sx={{ fontSize: 40, color: "#0077b5" }} />
            <Google sx={{ fontSize: 40, color: "#DB4437" }} />
          </Box>

          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            ou use seu email
          </Typography>

          {/* Login Form */}
          <Box component="form" noValidate sx={{ mt: 2 }}>
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
              <Box>
                <Checkbox color="primary" />
                <Typography variant="body2" component="span">
                  Lembrar acesso
                </Typography>
              </Box>
              <Link href="#" variant="body2" underline="none">
                Esqueceu sua senha?
              </Link>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 3, py: 1.5, borderRadius: 20, backgroundColor: "#EF7A1A" }}
            >
              Acessar
            </Button>
          </Box>
        </Grid>

        {/* Right Section - Registration */}
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
            Junte-se à ExecHub
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Preencha os seus dados e faça parte do movimento open talent
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
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
