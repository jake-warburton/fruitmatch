import { pieces } from 'src/components/game/pieces';

export default function index({
  fruit = null,
  visible = null,
  dimensions = '15',
}) {
  return (
    <>
      <div className="container">
        <div
          className="square"
          style={{
            background: `${!!fruit && visible ? pieces[fruit].color : `#eee`}`,
          }}
        >
          {!!fruit && visible && pieces[fruit].icon}
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .square {
          border-radius: 6px;
          width: 80%;
          height: 80%;
          font-size: 7rem;
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
            ${!!fruit && visible ? `${pieces[fruit].color}` : `#eee`} solid;
        }
      `}</style>
    </>
  );
}
