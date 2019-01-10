import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import {
  DragSource,
  DropTarget
  // ConnectDropTarget,
  // ConnectDragSource,
  // DropTargetMonitor,
  // DropTargetConnector,
  // DragSourceConnector,
  // DragSourceMonitor
} from "react-dnd";
// import { XYCoord } from "dnd-core"; //need to npm install
import flow from "lodash.flow";

const style = {
  border: "1px orange solid",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  curser: "move"
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform if moved crossed half way
    // Dragging downwards.
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // action performed
    props.moveCard(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  }
};

// 21:20 time of vid
// @DropTarget(Item)

class Card extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     blah,
  //     blah2
  //   };
  // }

  render() {
    const {
      text,
      isDragging,
      connectDragSource,
      connectDropTarget
    } = this.props;

    const opacity = isDragging ? 0 : 1;

    return (
      // <div>
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(<div style={{ ...style, opacity }}>{text}</div>)
      )
      // </div>
    );
  }
}

export default flow(
  DragSource("card", cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget("card", cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Card);
