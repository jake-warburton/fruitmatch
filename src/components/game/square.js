import { pieces } from 'src/components/game/pieces';

export default function index({
  Action,
  active,
  fruit = null,
  visible,
  dimensions,
  index,
}) {
  return (
    <>
      <div className="container" onClick={!!Action && Action}>
        <div
          className="square"
          style={{
            background: `${visible ? pieces[fruit].color : `#eee`}`,
          }}
        >
          {visible && !!fruit && pieces[fruit].icon}
        </div>
      </div>
      <style jsx>{`
        .container {
          width: ${dimensions}%;
          height: ${dimensions}%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .square {
          border-radius: 6px;
          width: 80%;
          height: 80%;
          font-size: 10vmin;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          border: 1vmin #eee solid;
          transition-duration: 0.2s;
        }
      `}</style>
      <style jsx>{`
        .square {
          border: 1vmin
            ${active ? `#0bec59` : visible ? `${pieces[fruit].color}` : `#eee`}
            solid;
        }
      `}</style>
    </>
  );
}
