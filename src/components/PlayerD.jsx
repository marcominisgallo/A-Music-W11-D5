import { Button, Container, ProgressBar } from "react-bootstrap";
import {
  Apple,
  FastForwardFill,
  PersonFill,
  PlayFill,
  Repeat,
  RewindFill,
  Shuffle,
  VolumeUp,
} from "react-bootstrap-icons";
const PlayerD = () => {
  return (
    <Container
      fluid
      className=" d-none d-lg-flex align-items-center justify-content-between rounded-2 py-3 px-5 "
      style={{ backgroundColor: "#2C2C2C" }}
    >
      <div className="text-light ps-5">
        <Shuffle className=" me-2" color="gray" />
        <RewindFill className=" me-2" color="gray" />
        <PlayFill className=" me-2" color="gray" size={35} />
        <FastForwardFill className=" me-2" color="gray" />
        <Repeat className=" me-2" color="gray" />
      </div>
      <div className=" rounded-2 bg-secondary w-50 d-flex justify-content-center py-3">
        <Apple className=" text-light" size={25} />
      </div>
      <div className=" d-flex align-items-center">
        <VolumeUp className=" text-white" size={20} />
        <ProgressBar
          className="progress-bar-white"
          now={40}
          style={{
            width: "80px",
            height: "10px",
            backgroundColor: "gray",
            color: "white",
          }}
        />
      </div>
      <Button
        className="d-flex align-items-center gap-2 fs-5 border-0"
        style={{ backgroundColor: "#fa586b" }}
      >
        <PersonFill /> Accedi
      </Button>
    </Container>
  );
};

export default PlayerD;
