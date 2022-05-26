import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import RNModal from "react-native-modal";
type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
};
export const Modal = ({
  isVisible = false,
  children,
  ...props
}: ModalProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      backdropOpacity={0.5}
      backdropColor={"black"}
      {...props}>
      {children}
    </RNModal>
  );
};

const ModalContainer = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <Text style={[styles.text]}>{title}</Text>
  </View>
);

const ModalBody = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E9D8A6",
    borderRadius: 25,
    // width:357,
    marginHorizontal: 30,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    // fontSize:15
  },
  text: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 18,

  },
  body: {
    justifyContent: "center",
    paddingHorizontal: 15,
    minHeight: 100,
  },

  footer: {
    color: 'red',
    padding: 10,
    flexDirection: "row",
    // backgroundColor:'#333333',
    // width:80,
    // height:35,
    alignSelf: 'center',
    //borderWidth:2,
    borderRadius: 50
    //alignItems:'center'
  },

  title: {
    color: '#fff',

  }

});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;