import "./index.scss";
import Modal from "react-bootstrap/Modal";
function NamesModal(props) {
  const handleClick = (song) => {
    localStorage.setItem("name", song.name);
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={true}
    >
      <Modal.Header className="name-modal-header" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          అన్ని పేర్ల list
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="name-modal-body"
        style={{
          maxHeight: "calc(100vh - 510px)",
          overflowY: "auto",
        }}
      >
        {
          // will fix this (or not) one day when I am wiser
        }

        {props.songsData && props.songsData.length > 0
          ? props.songsData
              .sort((a, b) => {
                var songA = a.name.toUpperCase();
                var songB = b.name.toUpperCase();
                return songA < songB ? -1 : songA > songB ? 1 : 0;
              })
              .map((song) => (
                <p
                  className="capitalize text-lg cursor-pointer"
                  onClick={() => handleClick(song)}
                  key={song.name}
                >
                  {song.name}
                </p>
              ))
          : null}
      </Modal.Body>
    </Modal>
  );
}

export default NamesModal;
