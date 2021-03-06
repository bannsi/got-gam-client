import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import NextButton from '../common/buttons/NextButton';
import Modal from '../common/modal/Modal';
import { Caption } from '../common/text/Caption';
import { SubTitle } from '../common/text/SubTitle';
import ArchiveHeader from '../modules/archive/components/ArchiveHeader';
import FolderItem from '../modules/archive/components/FolderItem';
import LinkButton from '../modules/archive/components/LinkButton';
import TimeLineInput from '../modules/archive/components/TimeLineInput';
import Folder from './Folder';
import AddFolderItem from '../modules/archive/components/AddFolderItem';
import FolderSelectItem from '../modules/archive/components/FolderSelectItem';
import AddTimelineButton from '../common/buttons/AddTimelineButton';
import AddFolderButton from '../modules/archive/components/AddFolderButton';

type ModalElementType = {
  [index: string]: JSX.Element;
  link: JSX.Element;
  folder: JSX.Element;
};
const Archive = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [title, setTitle] = useState('');
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState('link');
  const [link, setLink] = useState('');
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [indexCount, setIndexCount] = useState(0);
  const [timelineList, setTimelineList] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '' });
  const [folder, setFolder] = useState('');
  const onClose = () => {
    setVisible(false);
  };
  const onSubmit = () => {
    onClose();
    //폴더링 처리;
  };
  const onCreateFolder = () => {
    onClose();
    //폴더 생성 처리
  };

  const onReset = () => {
    setFolder('');
    setTitle('');
    setLink('');
    setTimelineVisible(false);
    setKey('link');
    setIndexCount(0);
    setTimelineList({ 0: '', 1: '', 2: '', 3: '', 4: '' });
  };

  useEffect(() => {
    if (!visible) {
      setTimeout(() => {
        onReset();
      }, 500);
    }
  }, [visible]);

  const ModalElement: ModalElementType = {
    ['link']: (
      <ModalContent>
        <SubTitle className="title" type="1">
          링크저장
        </SubTitle>
        <Caption>링크</Caption>
        <Input
          autoFocus
          value={link}
          onChange={(e: any) => {
            setLink(e.target.value);
            if (e.target.value.includes('youtube.com')) {
              setTimelineVisible(true);
            }
          }}
        ></Input>
        <TimeLineInputs timelineVisible={timelineVisible}>
          <Caption>타임라인 (선택)</Caption>
          {Object.keys(timelineList).map((timeline, index) => {
            if (indexCount >= index) {
              return (
                <TimeInputContainer>
                  <TimeLineInput
                    setTimeline={(time: string) =>
                      setTimelineList({ ...timelineList, [index]: time })
                    }
                  ></TimeLineInput>
                  {index === 0 && (
                    <AddTimelineButton onClick={() => setIndexCount(indexCount + 1)} />
                  )}
                </TimeInputContainer>
              );
            }
          })}
        </TimeLineInputs>
        <NextButton text={'다음'} onNext={() => setKey('folder')} />
      </ModalContent>
    ),
    ['folder']: (
      <ModalContent>
        <SubTitle className="title" type="1">
          폴더 선택
        </SubTitle>
        <FolderSelectorContainer>
          <AddFolderItem onClick={() => setKey('newfolder')} />
          <FolderSelectItem
            title={'부산'}
            thumbnail={
              'https://w.namu.la/s/31715e75ed8c895ea2d951c69f10b898bdc8bcf23495d7721cc38299a6c3200ed6b13691268191472e1900010f86499f54882be5b16f6e7e45a7c3dce94be17799e78b5a51e1903963021df44d55b3dfba34c177cdb1675399a5e82b38b1da64977a8412ea2ffd532a559cbd48e216dd'
            }
            selected={folder === '부산'}
            onClick={() => setFolder('부산')}
          />
          <FolderSelectItem
            title={'제주'}
            thumbnail={
              'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/6dTBQAAJW6QLbLUaneCZWL3Vhf4.jpg'
            }
            selected={folder === '제주'}
            onClick={() => setFolder('제주')}
          />
        </FolderSelectorContainer>
        <NextButton text={'완료'} onNext={onSubmit} />
      </ModalContent>
    ),
    ['newfolder']: (
      <ModalContent>
        <SubTitle className="title" type="1">
          폴더 생성
        </SubTitle>
        <Input
          placeholder="폴더명을 입력하세요 (최대 10글자)"
          autoFocus
          maxLength={10}
          value={title}
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
        />
        <NextButton text={'완료'} onNext={onCreateFolder} />
      </ModalContent>
    )
  };

  return (
    <Container>
      <ArchiveHeader folder={params.archiveId} />
      {params.archiveId ? (
        <Folder />
      ) : (
        <FolderContainer>
          <FolderItem
            title="부산"
            thumbnail={
              'https://w.namu.la/s/31715e75ed8c895ea2d951c69f10b898bdc8bcf23495d7721cc38299a6c3200ed6b13691268191472e1900010f86499f54882be5b16f6e7e45a7c3dce94be17799e78b5a51e1903963021df44d55b3dfba34c177cdb1675399a5e82b38b1da64977a8412ea2ffd532a559cbd48e216dd'
            }
            onClick={() => navigate(`/archive/${'부산'}`)}
          />
          <FolderItem
            title="제주"
            thumbnail={
              'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/6dTBQAAJW6QLbLUaneCZWL3Vhf4.jpg'
            }
            onClick={() => navigate(`/archive/${'제주'}`)}
          />
          <AddFolderButton
            onClick={() => {
              setKey('newfolder');
              setVisible(true);
            }}
          />
        </FolderContainer>
      )}
      {!params.archiveId && (
        <LinkButton
          onClick={() => {
            setVisible(true);
          }}
        />
      )}
      {!params.archiveId && (
        <Modal onClose={onClose} visible={visible}>
          {ModalElement[key]}
        </Modal>
      )}
    </Container>
  );
};

export default Archive;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 57px;
`;
const FolderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  padding: 16px;
`;

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  .title {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    color: #666666;
  }
`;

const Input = styled.input`
  width: 100%;
  background: #f7f7f7;
  border-radius: 8px;
  height: 40px;
  border: none;
  outline: none;
  padding: 0 12px;
  margin-top: 4px;
  margin-bottom: 25px;
  ::placeholder {
    color: #cccccc;
  }
`;

interface TimeLineInputsProps {
  timelineVisible: boolean;
}

const TimeLineInputs = styled.div<TimeLineInputsProps>`
  display: none;
  flex-direction: column;
  max-height: 0px;
  ${(props) =>
    props.timelineVisible ? 'display: flex; max-height: 400px;' : 'max-height: 0; display: none;'}
`;

const TimeInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const FolderSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 22px;
`;
