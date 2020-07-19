import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { SourceContext } from '../Context/SourceContext';
const favTrue = true;
const Channels = ({ fetchChannel, favNews }) => {
  const { value, value1 } = useContext(SourceContext);
  const [channels, setChannel] = value;
  const [currentChannel] = value1;
  if (currentChannel) {
    return (
      <div>
        <Button
          variant="primary"
          className="ml-1 mb-2"
          onClick={() => favNews(favTrue)}
        >
          Click for Fav
        </Button>
        <div className="list-group list-group-flush">
          {currentChannel.map((channels) => (
            <a
              onClick={() => {
                fetchChannel(channels);
              }}
              className="list-group-item list-group-item-action"
            >
              {channels.name}
            </a>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  }
};

export default Channels;
