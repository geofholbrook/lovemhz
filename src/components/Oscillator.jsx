import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-knob';
import './style/Oscillator.css';

export default class Oscillator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            knobId: `volume-${props.id}`
        }
    }

    componentDidMount() {
        $(`#${this.state.knobId}`).knob({
            'change' : (v) => {
                this.props.onMixChanged(v / 100);
            }
        });
    }

    render() {
        return (
            <div className="Oscillator">
                <div className="ttl">
                    <h3 className="panel_title">{this.props.id}</h3>
                </div>
                <div className="wav">
                    <p>Waveform</p>
                    <select onChange={(e) => {this.props.onWaveformChanged(e.target.value)}}>
                        <option value="sine">Sine</option>
                        <option value="square">Square</option>
                        <option value="triangle">Triangle</option>
                        <option value="sawtooth">Sawtooth</option>
                    </select>
                </div>
                <div className="mix">
                    <p>Mix</p>
                    <input type="text" value="50" id={this.state.knobId} className="knob" data-width="70"
                           data-height="70"  data-fgColor="#c20097" data-bgColor="#044f4d" data-displayInput="true" data-max="100" data-angleOffset="180"
                    />
                </div>
                <div className="oct">
                    <p>Octave</p>
                    <select onChange={(e) => {this.props.onOctaveChanged(e.target.value)}}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3" selected="selected">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
        );
    }
}