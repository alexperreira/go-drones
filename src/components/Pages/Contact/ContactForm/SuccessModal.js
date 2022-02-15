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
	display: ${({ success }) => (success ? 'block' : 'none')};
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
	display: ${({ success }) => (success ? 'block' : 'none')};

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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: left;
	width: 700px;
	height: 400px;

	h3 {
		font-family: 'Avenir Next Regular';
		font-size: 1rem;
		color: #fff;
	}
`;

const CloseButton = styled(IoCloseOutline)`
	width: 50px;
	height: 50px;
	color: #fff;
	position: absolute;
`;

// const portalElement = document.getElementById('success');

const SuccessModal = ({ open, success, onClose }) => {
	if (!open) return null;

	return (
		<>
			<Backdrop success={success} />
			<ModalContainer success={success}>
				<Wrapper>
					<Position>
						<Container>
							<h3>
								Thank you for reaching out! You will be hearing from us soon!
							</h3>
							<CloseButton onClick={onClose} />
						</Container>
					</Position>
				</Wrapper>
			</ModalContainer>
		</>
		// portalElement
	);
};

export default SuccessModal;
