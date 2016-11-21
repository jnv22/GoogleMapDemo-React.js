import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Components = {
  Card: React.createClass({
    render: function() {
      return (
        <Card
          expanded={this.props.isExpanded}
          style={{"margin": "32px"}}
        >
          <CardMedia
          expandable={true}
            mediaStyle={{height:"300px"}}
          >
            {this.props.map ? this.props.map() : null}
          </CardMedia>
          <CardText>
            {this.props.content}
          </CardText>
          <CardActions>
            <FlatButton label={this.props.modalOptions.failButton.text} onClick={this.props.modalOptions.failButton.onclick}/>
            <FlatButton label={this.props.modalOptions.successButton.text} primary={true}/>
          </CardActions>
        </Card>
      )
    }
  }),

  InputField: React.createClass({
    render: function() {
      return (
        <TextField
          type={this.props.type}
          id={this.props.id}
          value={this.props.value}
          style={{"margin-left": "20px"}}
          onChange={this.props.onChange}
          floatingLabelText={this.props.label}>
        </TextField>
      )
    }
  })
}
export default Components;
