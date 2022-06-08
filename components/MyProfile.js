import { useState } from 'react';

export default function AllStudents() {
const [contact, setContact] = useState("");
const [profile, setProfile] = useState("");
const [emne, setEmne] = useState("");
const [ambisjoner, setAmbisjoner] = useState("");
const [arbeidssted, setArebeidssted] = useState("");
const [arbeidsmengde, setArebeidsmengde] = useState("");

  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="card bg-white flex flex-col items-center justify-center p-10 shadow-2xl rounded-2xl w-60 m-4 text-gray-800 text-xs font-medium mt-4">
          <div className="name text-gray-800 text-xl font-medium">Profilbilde</div>
          <img
            className="object-cover rounded-full h-36 w-36 mx-auto m-1 p-1 border-4 border-violet-400"
            src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Human Picture by Ike louie Natividad"
          />
          <input className="block w-full text-sm text-slate-500 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" type="file"/>
          <button className="px-4 p-2 text-md font-bold text-center rounded-standard text-white bg-purple-1 hover:shadow-md hover:shadow-purple-2/50 active:bg-purple-1/70 mt-4"
                  type="submit" form="form1" value="">Lagre</button>
        </div>
        <div className="card bg-white flex flex-col items-center p-10 shadow-2xl rounded-2xl w-60 m-4 text-gray-800 text-xs font-medium mt-4">
          <div className="name text-gray-800 text-xl font-medium">Kontakt meg</div>
          <form>
            <label>
              <textarea className="bg-slate-100 m-4"
                type="text"
                placeholder="dummytext@gmail.com"
                value={contact}
                onChange={(e) => setContact(e.target.value)}>
                </textarea>
            </label>
            <button className="px-4 p-2 text-md font-bold rounded-standard text-white bg-purple-1 hover:shadow-md hover:shadow-purple-2/50 active:bg-purple-1/70 mt-4"
                    type="submit" form="form1" value="">Lagre</button>
          </form>
        </div>
        <div className="card bg-white flex flex-col items-center p-10 shadow-2xl rounded-2xl w-60 m-4 text-gray-800 text-xs font-medium mt-4">
          <div className="name text-gray-800 text-xl font-medium">Profiltekst</div>
          <form>
            <label>
              <textarea className="bg-slate-100 m-4 h-20"
                        type="text"
                        placeholder="“Jeg ser etter noen som ønsker å jobbe 1-2 dager i uka, først og fremst med programmering, men er åpen for andre emner også. Tar gjerne en pils eller tre etter jobbing”"
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}>
                </textarea>
            </label>
            <button className="px-4 p-2 text-md font-bold text-center rounded-standard text-white bg-purple-1 hover:shadow-md hover:shadow-purple-2/50 active:bg-purple-1/70"
                    type="submit" form="form1" value="">Lagre</button>
          </form>
        </div>
        <div className="card bg-white flex flex-col items-center p-10 shadow-2xl rounded-2xl w-60 m-4 text-gray-800 text-xs font-medium mt-4">
          <div className="name text-gray-800 text-xl font-medium">Emne</div>
          <form>

            <input type="radio" id="age1" name="age" value="Emne 1"
                   onChange={(e) => setEmne(e.target.value)}/>
            <label htmlFor="age1"> Emne 1</label><br/>
            <input type="radio" id="age2" name="age" value="Emne 2"
                   onChange={(e) => setEmne(e.target.value)}/>
            <label htmlFor="age2"> Emne 2</label><br/>
            <input type="radio" id="age3" name="age" value="Emne 3"
                   onChange={(e) => setEmne(e.target.value)}/>
            <label htmlFor="age3"> Emne 3</label><br/><br/>

            <button className="px-4 p-2 text-md font-bold text-center rounded-standard text-white bg-purple-1 hover:shadow-md hover:shadow-purple-2/50 active:bg-purple-1/70"
                    type="submit" form="form1" value="">Lagre</button>
          </form>
        </div>
        <div className="card bg-white flex flex-col items-center p-10 shadow-2xl rounded-2xl w-60 m-4 text-gray-800 text-xs font-medium mt-4">
          <div className="name text-gray-800 text-xl font-medium">Ambisjoner</div>
          <form>

            <input type="radio" id="age1" name="age" value="A"
                   onChange={(e) => setAmbisjoner(e.target.value)}/>
            <label htmlFor="age1"> A</label><br/>
            <input type="radio" id="age2" name="age" value="A-C"
                   onChange={(e) => setAmbisjoner(e.target.value)}/>
            <label htmlFor="age2"> A-C</label><br/>
            <input type="radio" id="age3" name="age" value="Bestått til D"
                   onChange={(e) => setAmbisjoner(e.target.value)}/>
            <label htmlFor="age3"> Bestått til D</label><br/><br/>

            <button className="px-4 p-2 text-md font-bold text-center rounded-standard text-white bg-purple-1 hover:shadow-md hover:shadow-purple-2/50 active:bg-purple-1/70"
                    type="submit" form="form1" value="">Lagre</button>
          </form>
        </div>
        <div className="card bg-white flex flex-col items-center p-10 shadow-2xl rounded-2xl w-60 m-4 text-gray-800 text-xs font-medium mt-4">
          <div className="name text-gray-800 text-xl font-medium">Arbeidssted</div>
          <form>

            <input type="radio" id="age1" name="age" value="Fysisk"
                   onChange={(e) => setArebeidssted(e.target.value)}/>
            <label htmlFor="age1"> Fysisk</label><br/>
            <input type="radio" id="age2" name="age" value="Hybrid"
                   onChange={(e) => setArebeidssted(e.target.value)}/>
            <label htmlFor="age2"> Hybrid</label><br/>
            <input type="radio" id="age3" name="age" value="Over nett"
                   onChange={(e) => setArebeidssted(e.target.value)}/>
            <label htmlFor="age3"> Over nett</label><br/><br/>

            <button className="px-4 p-2 text-md font-bold text-center rounded-standard text-white bg-purple-1 hover:shadow-md hover:shadow-purple-2/50 active:bg-purple-1/70"
                    type="submit" form="form1" value="">Lagre</button>
          </form>
        </div>
        <div className="card bg-white flex flex-col items-center p-10 shadow-2xl rounded-2xl w-60 m-4 text-gray-800 text-xs font-medium mt-4">
          <div className="name text-gray-800 text-xl font-medium">Arbeidsmengde</div>
          <form>

            <input type="radio" id="age1" name="age" value="10-20 timer"
                   onChange={(e) => setArebeidsmengde(e.target.value)}/>
            <label htmlFor="age1"> 10-20 timer</label><br/>
            <input type="radio" id="age2" name="age" value="20-40 timer"
                   onChange={(e) => setArebeidsmengde(e.target.value)}/>
            <label htmlFor="age2"> 20-40 timer</label><br/>
            <input type="radio" id="age3" name="age" value="40-60 timer"
                   onChange={(e) => setArebeidsmengde(e.target.value)}/>
            <label htmlFor="age3"> 40-60 timer</label><br/><br/>

            <button className="px-4 p-2 text-md font-bold text-center rounded-standard text-white bg-purple-1 hover:shadow-md hover:shadow-purple-2/50 active:bg-purple-1/70"
                    type="submit" form="form1" value="">Lagre</button>
          </form>
        </div>
      </div>

      <div className="name text-gray-800 text-xl font-medium mt-4">Forhåndsvisning:</div>
      <div className="card bg-white flex flex-col items-center justify-center p-10 shadow-2xl rounded-2xl w-80 m-4 ">
        <img
          className="object-cover rounded-full h-36 w-36 mx-auto m-1 p-1 border-4 border-violet-400"
          src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Human Picture by Ike louie Natividad"
        />

        <div className="name text-gray-800 text-xl font-medium mt-4">Ola</div>
        <div className="name text-gray-800 text-xl font-medium">Nordmann</div>
        <div className="mt-2 text-sky-800">
          <output>{contact}</output>
        </div>
        <div className= "mt-2 items-center font-medium mt-4">
          <output>{profile}</output>
        </div>
        <div className="mt-2 items-center font-medium mt-4 font-semibold font-weight: 600">
          Emne:
        </div>
        <div>
          <output>{emne}</output>
        </div>
        <div className="mt-2 items-center font-medium mt-4 font-semibold font-weight: 600">
          Ambisjoner:
        </div>
        <div>
          <output>{ambisjoner}</output>
        </div>
        <div className="mt-2 items-center font-medium mt-4 font-semibold font-weight: 600">
          Arbeidssted:
        </div>
        <div>
          <output>{arbeidssted}</output>
        </div>
        <div className="mt-2 items-center font-medium mt-4 font-semibold font-weight: 600">
          Arbeidsmengde:
        </div>
        <div>
          <output>{arbeidsmengde}</output>
        </div>
        <div className="bg-violet-400 text-white px-20 mt-4 pt-4 pb-2 flex flex-row justify-center rounded-2xl">
          <div className="flex flex-row mx-1 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="mx-2 bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </div>
          <div className="flex flex-row mx-1 hover:cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-discord"
              viewBox="0 0 16 16"
            >
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
            </svg>
          </div>
        </div>


      </div>


      
    </>
  );
}
