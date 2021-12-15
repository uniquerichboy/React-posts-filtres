import React from 'react';
import { Button } from 'antd';

const MyButton = ({children, ...props}) =>  <Button {...props}>{children}</Button>

export default MyButton;