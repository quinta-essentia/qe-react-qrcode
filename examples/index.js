const QRCode = require('../lib/qrCode');
const React = require('react');
const ReactDOM = require('react-dom');

class Demo extends React.Component {
  render () {
    return (
      <QRCode
        value='https://www.merriam-webster.com/dictionary/quintessence'
        size='256'
        fgColor='#000000'
        bgColor='#FFFFFF'
        level='L'
        renderAs={this.state.renderAs}
        includeMargin={this.state.includeMargin}
        imageSettings={
          this.state.includeImage
            ? {
              src: this.state.imageSrc,
              height: this.state.imageH,
              width: this.state.imageW,
              x: this.state.centerImage ? null : this.state.imageX,
              y: this.state.centerImage ? null : this.state.imageY,
              excavate: this.state.imageExcavate,
            }
            : null
        }
      />
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('demo'));
