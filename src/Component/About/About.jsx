import Coursel from "../../utils/Coursel";
import { Typography, Stack, Paper, Divider } from "@mui/material/";
import AboutCard1 from "./AboutCard1/AboutCard1";
import GridStack from "../../utils/GridStack";
import CollegeFeature from "./CollegeFeature/CollegeFeature";
import { useContext } from "react";
import UseContext from "../../State/UseState/UseContext";

export default function About() {
  const { aboutInfo } = useContext(UseContext);
  return (
    <>
      <Stack mx={4} mt={8}>
        <Coursel />
        <Typography
          my={5}
          gutterBottom
          variant="h3"
          sx={{ color: "primary.main", textAlign: "center" }}
          component="div"
        >
          Welcome to Sushila Shakarao Mahavidyalaya
        </Typography>
        <Paper sx={{ padding: 2 }}>
          <Typography
            mx={2}
            variant="subtitle-2"
            lineHeight={2}
            component={"subtitle-2"}
            textAlign={"left"}
            color="primary.light"
          >
            <Typography
              variant="body1"
              component={"subtitle-2"}
              textAlign={"right"}
              color="primary.light"
            >
              {" "}
              Sushila Shankarrao Gadhave Mahavidyalaya is Khandala Vibhag
              Shikshan Samiti's only branch imparting higher education.
            </Typography>
            The college was established in 2007-08. It is permanently
            non-granted college affiliated to Shivaji University, Kolhapur The
            college has four faculties Arts, Commerce, Science and IT Besides
            thesetraditional courses, college also runs various need based
            career oriented courses like Diploma in Hindi-anuvad, Diploma in
            Marathi Laghu-Sahitya Parichaya, Diploma in Library Management,
            Vocational courses. Along with these courses college also organizes
            skill based and vocational workshops. College lays stress on
            personality development of the students through N.S.S, cultural,
            sports and co-curricular activities. Competitive examination
            guidance center is also run by college. We also have study center of
            Yashwantrao Chavan Maharashtra Open University, Nasik For
            empowerment of girls in the rural area department of physical
            Education and Sports conducted a short duration Self-defense
            Training Course.
          </Typography>
        </Paper>
        <Divider sx={{ margin: 2 }} />
        <Stack>
          {/* <CollegeHistory/> */}
          {/* <SchollExperience/> */}
          {/* <PrincipalImage/> */}
          {/* <AwardNAchievement/> */}
          {/* <SchoolUniform/> */}
          <Typography
            variant="h4"
            color={"primary.main"}
            textAlign={"center"}
            component={"h2"}
          >
            College Proffesional's
          </Typography>
          {aboutInfo.map(({ name, url, message, index }) => {
            return (
              <>
                {index % 2 === 0 ? (
                  <AboutCard1
                    key={index}
                    side={"right"}
                    name={name}
                    url={url}
                    message={message}
                  />
                ) : (
                  <AboutCard1
                    key={index}
                    side={"left"}
                    name={name}
                    url={url}
                    message={message}
                  />
                )}
              </>
            );
          })}
        </Stack>
        <Stack>
          <GridStack />
        </Stack>
        <Stack>
          <CollegeFeature />
        </Stack>
      </Stack>
    </>
  );
}
