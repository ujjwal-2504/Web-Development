import * as React from "react";
import { useContext } from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import GroupsIcon from "@mui/icons-material/Groups";
import { EmployeeDataContext } from "../context/EmployeeContext";
import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard";
import { Link } from "react-router-dom";

const NAVIGATION = [
  {
    kind: "header",
    title: "Options",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "myTask",
    title: "My Tasks",
    icon: <AddTaskIcon />,
  },
  {
    segment: "allTask",
    title: "All Tasks",
    icon: <AddTaskIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Teams",
  },
  {
    segment: "myTeam",
    title: "My Team",
    icon: <GroupsIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

const branding = {
  logo: <img src="../assets/LogoBlueBg.JPG" alt="EMS logo" />,
  title: "Employee Managenent System",
  homeUrl: "/",
};

export default function EmpHomePage() {
  const router = useDemoRouter("/dashboard");

  const { employee } = useContext(EmployeeDataContext);

  return (
    <AppProvider navigation={NAVIGATION} router={router} branding={branding}>
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <EmployeeDashboard data={employee} />
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
