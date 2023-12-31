const SunDetails = ({ sunrise, sunset }) => {
  return (
    <div className="mt-24">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACK0lEQVR4nO2Zz0sVURTHP9aign4gLSJ3/qBW1b+RLXy1eLjQpSvB/yCovQRR/Q8t2oateuEipIUg/gE+MBW0hYKgosXIgRNcLmd84/P9mLnvfODAMPfec86XO/fOmbngOI7jOCEvgS1gU6+Tpg6cAZnaX2CWARGbpSy6niM2SdH1FmKTEl0vKDYJ0TVDrCXe6iNjK8dvQ8i0IXjaEC2vrMqxY4jFEIwhWsZWjprO1Eb0iFqC//dv6pgpEiLLEZwsmQtOnMxnOHGyQZvhZiBWXlnJM6lVmNjzfifjOI7jDDo1YA/YTe0zMI/toPCQH/KVZhR4B7wHhq9QWg6rD/E1QolZDYQ0gKE2BMuYH0H7L0rKdf3NGoqZ0banwBywaAhe1LYn2ncmaj8CrlFSvkTJ7kUfC62sqWPCe58p+Ro+voTAVnYCTFBibkTr+Kq2qj5Lyd1os4kf7Q96HvwIuKP2GHgFfAT+5IxtaN++cR/4Dhzq+hrTDWvJSHYfmAduFvB7C1gADgw/SxpjTGMeag6SS9d5GyUja3bZSPIn8LAN//LeXTH8LRv7wxt6wOsCa+9rwVm9aLa/FYgjuXSde7qu8pJYA253II6s2/UL4jQ0l54wpOe44YGZ2GlQQHSCZ8bJ4o7Gtqq4rtOIkpGduNN8Mma2LzyISkm5Hu9SMRPG+dfmZpjLi0uWg2U10SC/hFuyWYJkO2VbLthgUo9AsoqbaPCTDcdxHMdxHHrFORa5HsG9J8pjAAAAAElFTkSuQmCC" />
      <label htmlFor="sunrise">{sunrise}</label>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLElEQVR4nO2ZS0scQRDHfyYHDURFPEi8+cCcjF9DPWgiiofN0VMg30AwdwlIku/gIdegJ1c8hOBBCPkAER8R3AQiCEnwwYSGGmianrXX3XF7xvpBwe48qupPT/XU1oKiKIqi2MwCNeAUmOEe8ANIxI65BySOlZ5EBZecRFe45CRlXeEF4Je8hp4HCDbv533gUD4Xig7gpyXqElisI3hRrkmPnVBATh1hqWhXsCvW2AEFZM4jxP3uO3ZZxEc6ZT5DZJZdARUKznyg6FKIDRVdKrE3iS6l2CzRpRabYpqQI2kw7IZEURRFUdqAzqWLzBDwFlgD+poY8fSJD+NrkIjZs4RUZfLRqGBzz7Z1fpdIeSi9sS0m7ZOfAUvAqkfwqpwbl2srzvk/wAMi5aOTbE0Gc6EDgH25xz62TuQ1/LcBgTfZP2CUiOl06rhZ2xOfUdLjbDbuo/1Ofg6OAd1iT4EXwHtnrJs4m5+5tm30A1vAudTXsGxYG55kfwOvgK4Av4+A18CZx8+GxBiWmOeSg8kld944yZia3fEk+Rl4cgv/5r37xeNvx7M/rHAHLAfU3qfAVa232psBcUwuudMrdZWVxFfgcQvimLr9VidOVXK5EzqAl/IfkJ3EhdVAtIIJz6TzRGL7urjcqTrJmJ241XzwrGxbGHBaSfN5JKdmxo5zfcvNMJPpBtvBWM1omCKAwwiSbZUdq2AP5jH4HsHqNGtGw6RPoKIoiqIoikIO/Ace+B8Cpd3FtQAAAABJRU5ErkJggg==" />
      <label htmlFor="sunset">{sunset}</label>
    </div>
  );
};

export default SunDetails;
