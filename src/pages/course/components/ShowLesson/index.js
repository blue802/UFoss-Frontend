import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Box
} from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

function ShowLesson(props) {
  const { index, lesson } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Lesson {`${index + 1}:  ${lesson.title}`}</Button>
      <Modal isOpen={isOpen} onClose={onClose} width="1000px">
        <ModalOverlay />
        <ModalContent width='800px'>
          <ModalHeader>Lesson {`${index + 1} ${lesson.title}`}</ModalHeader>
          <ModalBody>
            <Box className='player-wrapper'>
              <ReactPlayer
                width="100%"
                className='react-player'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
ShowLesson.prototype = {
  index: PropTypes.string,
  lesson: PropTypes.string
}

export default ShowLesson
