/**
 * The Team Member Component
 * @author [Sam](https://github.com/Samm96)
 *
 * React template to create team members.
 */

// note: remember to replace values with variables from theme file

const Container = styled.div`
  max-width: 361px;
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 126px;
  height: 126px;
`;

const Text = styled.p`
  font-family: "Open Sauce Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #0000;
`;

const BoldText = styled(Text)`
  font-weight: 700;
`;

const TeamMember = ({ photo, name, pronouns, headline }) => {
  const placeholder = {
    photo:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80",
    name: "Woofers",
    pronouns: "(dog/retriever)",
    headline: "Good Boy",
  };

  return (
    <div>
      <Container>
        <Photo src={photo || placeholder.photo} alt="Placeholder Img" />
        <BoldText>{name + " "|| placeholder.name + " "}</BoldText>
        <Text>{pronouns ? pronouns || placeholder.pronouns : ""}</Text>
        <Text>{headline || placeholder.headline}</Text>
      </Container>
    </div>
  );
};
