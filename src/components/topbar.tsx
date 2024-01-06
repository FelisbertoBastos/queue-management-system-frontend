import higiaLogo from "../assets/logo_higia.svg";

export const Topbar = () => {
  return (
    <nav
      className="level py-3"
      style={{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <p className="level-item has-text-centered">
        <img src={higiaLogo} alt="teste" width={70} />
      </p>
    </nav>
  );
};
