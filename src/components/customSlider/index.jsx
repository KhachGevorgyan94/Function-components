import React, { Component } from 'react';
import './style.scss'
class CustomSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            thumbPosition: 0,
        };

        this.trackRef = React.createRef();
    }

    handleThumbMove = (event) => {
        const track = this.trackRef.current;
        const trackWidth = track.offsetWidth;
        const numPositions = this.props.positions.length;

        const newPosition = (event.clientX - track.getBoundingClientRect().left) / trackWidth;
        const nearestIndex = Math.round(newPosition * (numPositions - 1));

        this.setState({
            thumbPosition: nearestIndex / (numPositions - 1),
        });
    };

    handleThumbRelease = () => {
        const { positions, onPositionChange } = this.props;
        const { thumbPosition } = this.state;
        const numPositions = positions.length;
        const nearestIndex = Math.round(thumbPosition * (numPositions - 1));

        onPositionChange(nearestIndex);
    };

    render() {
        const { positions, value } = this.props;
        const { thumbPosition } = this.state;
        const numPositions = positions.length;

        return (
            <div className="slider">
                <div
                    ref={this.trackRef}
                    className="slider-track"
                    style={{
                        background: `linear-gradient(to right, #ccc ${thumbPosition * 100}%, #fff ${thumbPosition * 100}%)`,
                    }}
                >
                    {positions.map((position, index) => (
                        <div
                            key={index}
                            className="slider-label"
                            style={{
                                left: `${(index / (numPositions - 1)) * 100}%`,
                            }}
                        >
                            {position}
                        </div>
                    ))}
                </div>
                <div
                    className="slider-thumb"
                    style={{
                        left: `${thumbPosition * 100}%`,
                    }}
                    onMouseDown={() => {
                        window.addEventListener('mousemove', this.handleThumbMove);
                        window.addEventListener('mouseup', () => {
                            window.removeEventListener('mousemove', this.handleThumbMove);
                            this.handleThumbRelease();
                        });
                    }}
                ></div>
            </div>
        );
    }
}

export default CustomSlider;