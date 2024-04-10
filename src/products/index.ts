import { ListGuesser } from "react-admin";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

export default {
  list: ListGuesser,
  recordRepresentation: "reference",
  options: { label: "Poster |||| Posters" },
  icon: PhotoCameraBackIcon,
};
