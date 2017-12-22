package pe.gob.sunat.curso.model;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author John
 *
 */
@XmlRootElement(name="CURSOS")
public class CursoWrapper {
	
	private List<Curso> cursos;
	
	@XmlElement(name="CURSO")
	public List<Curso> getCursos() {
		return cursos;
	}
	
	public void setCursos(List<Curso> cursos) {
		this.cursos = cursos;
	}
	
}
