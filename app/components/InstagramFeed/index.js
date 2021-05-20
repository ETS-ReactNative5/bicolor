import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const InstagramFeed = ({ token, counter }) => {
  const [state, setState] = React.useState({
    feeds: [],
    isError: '',
    isLoaded: false,
  });

  React.useEffect(() => {
    const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token=${token}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setState({
            isLoaded: true,
            isError: true,
          });
        } else {
          setState({
            isLoaded: true,
            feeds: data.data,
            isError: false,
          });
        }
      })
      .catch(error => {
        console.log(error);
        setState({
          isLoaded: true,
          isError: true,
        });
      });
  }, [token]);

  if (!state.isLoaded || state.isError) {
    return (
      <span className="instagram-link">
        Больше работ в нашем{' '}
        <a target="_blank" href="https://www.instagram.com/bikolor/">
          Instagram
        </a>
      </span>
    );
  }

  return (
    <div>
      {state.feeds.slice(0, counter).map(feed => (
        <div key={feed.media_url}>
          <a
            href={feed.permalink}
            className="ig-instagram-link"
            target="_blank"
            rel="noreferrer"
          >
            {feed.media_type === 'IMAGE' ||
            feed.media_type === 'CAROUSEL_ALBUM' ? (
                <img src={feed.media_url} alt="description" />
              ) : (
                <video src={feed.media_url} />
              )}

            <div>
              <div className="instagram-count-item">
                <span className="icon">
                  <svg height="18" viewBox="0 0 512 512" width="18">
                    <path
                      fill="currentColor"
                      d="m256 386c-71.683 0-130-58.317-130-130 7.14-172.463 252.886-172.413 260 .001 0 71.682-58.317 129.999-130 129.999zm0-220c-49.626 0-90 40.374-90 90 4.944 119.397 175.074 119.362 180-.001 0-49.625-40.374-89.999-90-89.999zm236 346h-472c-11.046 0-20-8.954-20-20v-472c0-11.046 8.954-20 20-20h472c11.046 0 20 8.954 20 20v472c0 11.046-8.954 20-20 20zm-452-40h432v-432h-432zm372-392c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20 11.046 0 20-8.954 20-20 0-11.046-8.954-20-20-20z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
InstagramFeed.propTypes = {
  token: PropTypes.string.isRequired,
  counter: PropTypes.number,
};

export default InstagramFeed;
