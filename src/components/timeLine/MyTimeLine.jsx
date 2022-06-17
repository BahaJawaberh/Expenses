import React from "react";
import MyTimelineItem from "./MyTimeLineItem";
import { Timeline } from "@material-ui/lab";

const MyTimeLine = (props) => {
  const { timeline,title } = props;

  return (
    <Timeline align="alternate">
      <h1>{title}</h1>
      {timeline.map((item,i) => (
        <MyTimelineItem key={i}title={item} />
      ))}
    </Timeline>
  );
};

export default MyTimeLine;