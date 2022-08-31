import './style.css'
import { Container } from 'reactstrap'

export default function Footer() {
  return (
      <footer className="bg-dark p-4 position-absolute w-100">
        <Container>
          <p className="text-white">
            © 2022 Copyright: Team Two Entertaiment, <a>all rights reserved</a>
          </p>
        </Container>
      </footer>
  );
}