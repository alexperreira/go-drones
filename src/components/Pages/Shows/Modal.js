import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 100;
	background: rgba(0, 0, 0, 0.5);
`;

const animation = css`
	@keyframes slide-down {
		from {
			opacity: 0;
			transform: translateY(-3rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

const ModalContainer = styled.div`
	position: fixed;
	top: 20vh;
	left: 0;
	align-self: center;
	padding: 1rem;
	// border-radius: 14px;
	box-shadow: 0 2px 8px rgba(255, 255, 255, 0.25);
	z-index: 100;
	animation: ${animation} 300ms ease-out forwards;

	@media (min-width: 768px) {
		width: 40rem;
		left: calc(50% - 20rem);
	}
`;

const Wrapper = styled.div`
	position: relative;
	// padding-top: 56.25%;
	padding-top: calc(720 / 1280 * 100%);
	overflow: hidden;
`;

const Position = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const CloseButton = styled(IoCloseOutline)`
	width: 50px;
	height: 50px;
	color: #fff;
	position: absolute;
`;

// const MODAL_STYLES = {
// 	position: 'fixed',
// 	top: '50%',
// 	left: '50%',
// 	transform: 'translate(-50%, -50%)',
// 	backgroundColor: '#fff',
// 	padding: '50px',
// 	zIndex: 1000,
// };

// const OVERLAY_STYLES = {
// 	position: 'fixed',
// 	top: 0,
// 	left: 0,
// 	right: 0,
// 	bottom: 0,
// 	backgroundColor: 'rgba(0,0,0,0.7)',
// 	zIndex: 1000,
// };

const portalElement = document.getElementById('overlays');

const Modal = ({ open, children, onClose }) => {
	if (!open) return null;

	return ReactDOM.createPortal(
		<>
			<Backdrop />
			<ModalContainer>
				<Wrapper>
					<Position>
						<CloseButton onClick={onClose} />
						{children}
					</Position>
				</Wrapper>
			</ModalContainer>
		</>,
		portalElement
	);
};

export default Modal;
